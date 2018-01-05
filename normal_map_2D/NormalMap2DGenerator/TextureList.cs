using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace NormalMap2DGenerator
{
    public class TextureList
    {
        private string _Key;
        private ListBox _List;
        private PictureBox _Preview;
        private List<Bitmap> _Images;
        public TextureList(string Key, ListBox List, PictureBox Preview)
        {
            this._Key = Key;
            this._List = List;
            this._Preview = Preview;
            this._Images = new List<Bitmap>();
            this.SetEvents();
        }
        public int Length()
        {
            return this._Images.Count;
        }
        public Size GetSize()
        {
            if (this._Images.Count == 0) return new Size(0,0);
            return this._Images[0].Size;
        }
        public Bitmap GetImage(int Index)
        {
            return this._Images[Index];
        }
        public void Load(string Path)
        {
            this._Images.Clear();
            this._List.Items.Clear();
            for (int i = 0; true; i++)
            {
                if (File.Exists(Path + "/" + this._Key + (i + 1) + ".png"))
                {
                    Bitmap NewBitmap = new Bitmap(Bitmap.FromFile(Path + "/" + this._Key + (i + 1) + ".png"));
                    this._Images.Add(NewBitmap);
                    this._List.Items.Add(this._Key + (i + 1));
                }
                else break;
            }
            if (this._Images.Count > 0) this._List.SelectedIndex = 0;
        }
        public void Clear()
        {
            this._Images.Clear();
            this._List.Items.Clear();
        }
        public void Export(string Path)
        {
            if (!Directory.Exists(Path)) return;
            for (int i = 0; i < this._Images.Count; i++)
            {
                this._Images[i].Save(Path + "/" + this._Key + (i + 1) + ".png", System.Drawing.Imaging.ImageFormat.Png);
            }
        }
        public void SetImages(List<Bitmap> Images)
        {
            this._Images = Images;
            for(int i = 0; i < this._Images.Count; i++)
            {
                this._List.Items.Add("Normal" + (i+1));
            }
            if (this._Images.Count > 0) this._List.SelectedIndex = 0;
        }
        private void SetEvents()
        {
            this._List.SelectedIndexChanged += new EventHandler(this.ListSelect);
        }
        private void ListSelect(object Sender, EventArgs e)
        {
            if (this._List.SelectedIndex == -1) this._Preview.BackgroundImage = null;
            else
            {
                this._Preview.BackgroundImage = this._Images[this._List.SelectedIndex];
            }
        }
    }
}
