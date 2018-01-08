using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Drawing;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace NormalMap2DGenerator
{
    class Generator
    {
        private bool _Toon;
        private float[,,] _Values;
        private ProgressBar _Progress;
        private TextureList _Generated;
        private TextureList[] _Directions;
        public Generator(TextureList Generated, TextureList[] TextureLists, ProgressBar Progress)
        {
            this._Toon = false;
            this._Progress = Progress;
            this._Generated = Generated;
            this._Directions = TextureLists;
        }
        public void ToggleToon(bool Value)
        {
            this._Toon = Value;
        }
        public void Load(string Path)
        {
            for (int i = 0; i < 4; i++) this._Directions[i].Load(Path);
        }
        public void Export(string Path)
        {
            this._Generated.Export(Path);
        }
        public void Generate()
        {
            this._Generated.Clear();
            int Length = this._Directions[0].Length();
            Size Dimensions = this._Directions[0].GetSize();
            List<Bitmap> Images = new List<Bitmap>();
            this._Progress.Maximum = Length;
            this._Progress.Value = 0;
            this._Progress.Visible = true;
            for(int i = 0; i < Length; i++)
            {
                Bitmap B = new Bitmap(Dimensions.Width, Dimensions.Height);
                this._Values = new float[Dimensions.Width, Dimensions.Height, 3];
                this.FillColor(B);
                this.CreateMap(B);
                this.ApplyVector(B, this._Directions[0].GetImage(i), new float[] { -1.0f, 0 });
                this.ApplyVector(B, this._Directions[1].GetImage(i), new float[] { 1.0f, 0 });
                this.ApplyVector(B, this._Directions[2].GetImage(i), new float[] { 0, 1.0f });
                this.ApplyVector(B, this._Directions[3].GetImage(i), new float[] { 0, -1.0f });
                this.ApplyColor(B);
                Images.Add(B);
                this._Progress.Value += 1;
            }
            this._Generated.SetImages(Images);
            this._Progress.Visible = false;
        }
        public void FillColor(Bitmap B)
        {
            for(int i = 0; i < B.Width; i++)
            {
                for(int j = 0; j < B.Height; j++)
                {
                    B.SetPixel(i, j, Color.FromArgb(127, 127, 255));
                }
            }
        }
        public void CreateMap(Bitmap B)
        {
            for (int i = 0; i < B.Width; i++)
            {
                for (int j = 0; j < B.Height; j++)
                {
                    this._Values[i, j, 0] = 0;
                    this._Values[i, j, 1] = 0;
                    this._Values[i, j, 2] = 0;
                }
            }
        }
        public void ApplyVector(Bitmap B, Bitmap R, float[] Changes)
        {
            if (!this._Toon) this.ApplyVectorDefault(B, R, Changes);
            else this.ApplyVectorToon(B, R, Changes);
        }
        public void ApplyVectorToon(Bitmap B, Bitmap R, float[] Changes)
        {
            for (int i = 0; i < B.Width; i++)
            {
                for (int j = 0; j < B.Height; j++)
                {
                    int Red = R.GetPixel(i, j).R;
                    Red -= 178;
                    if (Red < 0) Red = 0;
                    if (Red <= 0) continue;
                    float Factor = Red / 77.0f;
                    this._Values[i, j, 0] += Changes[0] * Factor;
                    this._Values[i, j, 1] += Changes[1] * Factor;
                    this._Values[i, j, 2] += Factor;
                }
            }
        }
        public void ApplyVectorDefault(Bitmap B, Bitmap R, float[] Changes)
        {
            for (int i = 0; i < B.Width; i++)
            {
                for (int j = 0; j < B.Height; j++)
                {
                    int Red = R.GetPixel(i, j).R;
                    if (Red <= 0) continue;
                    float Factor = Red / 255.0f;
                    this._Values[i, j, 0] += Changes[0] * Factor;
                    this._Values[i, j, 1] += Changes[1] * Factor;
                    this._Values[i, j, 2] += Factor;
                }
            }
        }
        private void ApplyColor(Bitmap B)
        {
            for (int i = 0; i < B.Width; i++)
            {
                for (int j = 0; j < B.Height; j++)
                {
                    this._Values[i, j, 2] = 1 - this._Values[i, j, 2] * 2;
                    if (this._Values[i, j, 2] < 0) this._Values[i, j, 2] = 0;
                    B.SetPixel(i, j, this.ColorFromVector(new float[3]{ this._Values[i, j, 0], this._Values[i, j, 1], this._Values[i, j, 2]}));
                }
            }
        }
        private Color ColorFromVector(float[] Vector)
        {
            Vector = this.CleanVector(Vector);
            return Color.FromArgb((int)(Vector[0] * 255), (int)(Vector[1] * 255), (int)(Vector[2] * 255));
        }
        private float[] CleanVector(float[] Vector)
        {
            Vector[0] += 1.0f;
            Vector[0] /= 2;
            Vector[1] += 1.0f;
            Vector[1] /= 2;
            Vector[2] += 1.0f;
            Vector[2] /= 2;
            if (Vector[0] < 0) Vector[0] = 0;
            if (Vector[1] < 0) Vector[1] = 0;
            if (Vector[2] < 0) Vector[2] = 0;
            if (Vector[0] > 1) Vector[0] = 1;
            if (Vector[1] > 1) Vector[1] = 1;
            if (Vector[2] > 1) Vector[2] = 1;
            return Vector;
        }
    }
}
