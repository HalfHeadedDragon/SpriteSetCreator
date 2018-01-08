using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.IO;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace NormalMap2DGenerator
{
    public partial class MainForm : Form
    {
        private Generator Gen;
        public MainForm()
        {
            InitializeComponent();
            TextureList Generated = new TextureList("Normal", this.generatedList, this.generatedPreview);
            TextureList[] Directions = new TextureList[4];
            Directions[0] = new TextureList("Left", this.leftList, this.leftLight);
            Directions[1] = new TextureList("Right", this.rightList, this.rightLight);
            Directions[2] = new TextureList("Up", this.topList, this.topLight);
            Directions[3] = new TextureList("Down", this.bottomList, this.bottomLight);
            this.Gen = new Generator(Generated, Directions, this.progress);
        }
        private void Import_Click(object sender, EventArgs e)
        {
            FolderBrowserDialog Dialog = new FolderBrowserDialog();
            if(Dialog.ShowDialog() == DialogResult.OK && Dialog.SelectedPath != "")
            {
                this.Gen.Load(Dialog.SelectedPath);
            }
        }
        private void Generate_Click(object sender, EventArgs e)
        {
            this.Gen.Generate();
        }
        private void Export_Click(object sender, EventArgs e)
        {
            FolderBrowserDialog Dialog = new FolderBrowserDialog();
            if (Dialog.ShowDialog() == DialogResult.OK && Dialog.SelectedPath != "")
            {
                this.Gen.Export(Dialog.SelectedPath);
            }
        }

        private void Toon_CheckedChanged(object sender, EventArgs e)
        {
            this.Gen.ToggleToon(Toon.Checked);
        }
    }
}
