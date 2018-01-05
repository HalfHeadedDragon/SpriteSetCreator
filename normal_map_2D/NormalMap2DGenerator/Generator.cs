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
        private ProgressBar _Progress;
        private TextureList _Generated;
        private TextureList[] _Directions;
        public Generator(TextureList Generated, TextureList[] TextureLists, ProgressBar Progress)
        {
            this._Progress = Progress;
            this._Generated = Generated;
            this._Directions = TextureLists;
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
                this.FillColor(B);
                this.ApplyColor(B, this._Directions[0].GetImage(i), new int[] { -127, 0 });
                this.ApplyColor(B, this._Directions[1].GetImage(i), new int[] { 127, 0 });
                this.ApplyColor(B, this._Directions[2].GetImage(i), new int[] { 0, 127 });
                this.ApplyColor(B, this._Directions[3].GetImage(i), new int[] { 0, -127 });
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
        public void ApplyColor(Bitmap B, Bitmap R, int[] Changes)
        {
            for (int i = 0; i < B.Width; i++)
            {
                for (int j = 0; j < B.Height; j++)
                {
                    int Red = R.GetPixel(i, j).R;
                    double Factor = Red / 255.0;
                    Color Current = B.GetPixel(i, j);
                    Current = Color.FromArgb(Current.R + (int)(Changes[0] * Factor), Current.G + (int)(Changes[1] * Factor), Current.B - Math.Abs((int)(Changes[0] * Factor)) - Math.Abs((int)(Changes[1] * Factor)));
                    B.SetPixel(i, j, Current);
                }
            }
        }
    }
}
