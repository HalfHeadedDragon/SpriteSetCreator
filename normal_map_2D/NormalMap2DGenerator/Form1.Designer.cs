namespace NormalMap2DGenerator
{
    partial class MainForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(MainForm));
            this.panel1 = new System.Windows.Forms.Panel();
            this.leftList = new System.Windows.Forms.ListBox();
            this.leftLight = new System.Windows.Forms.PictureBox();
            this.panel2 = new System.Windows.Forms.Panel();
            this.rightList = new System.Windows.Forms.ListBox();
            this.rightLight = new System.Windows.Forms.PictureBox();
            this.panel3 = new System.Windows.Forms.Panel();
            this.topList = new System.Windows.Forms.ListBox();
            this.topLight = new System.Windows.Forms.PictureBox();
            this.panel4 = new System.Windows.Forms.Panel();
            this.bottomList = new System.Windows.Forms.ListBox();
            this.bottomLight = new System.Windows.Forms.PictureBox();
            this.generatedPreview = new System.Windows.Forms.PictureBox();
            this.Import = new System.Windows.Forms.Button();
            this.Generate = new System.Windows.Forms.Button();
            this.generatedList = new System.Windows.Forms.ListBox();
            this.Export = new System.Windows.Forms.Button();
            this.panel5 = new System.Windows.Forms.Panel();
            this.progress = new System.Windows.Forms.ProgressBar();
            this.panel6 = new System.Windows.Forms.Panel();
            this.Toon = new System.Windows.Forms.CheckBox();
            this.panel1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.leftLight)).BeginInit();
            this.panel2.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.rightLight)).BeginInit();
            this.panel3.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.topLight)).BeginInit();
            this.panel4.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.bottomLight)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.generatedPreview)).BeginInit();
            this.panel5.SuspendLayout();
            this.panel6.SuspendLayout();
            this.SuspendLayout();
            // 
            // panel1
            // 
            this.panel1.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.panel1.Controls.Add(this.leftList);
            this.panel1.Controls.Add(this.leftLight);
            this.panel1.Dock = System.Windows.Forms.DockStyle.Left;
            this.panel1.Location = new System.Drawing.Point(0, 0);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(150, 550);
            this.panel1.TabIndex = 0;
            // 
            // leftList
            // 
            this.leftList.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(40)))), ((int)(((byte)(40)))), ((int)(((byte)(40)))));
            this.leftList.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.leftList.Dock = System.Windows.Forms.DockStyle.Fill;
            this.leftList.ForeColor = System.Drawing.Color.White;
            this.leftList.FormattingEnabled = true;
            this.leftList.Location = new System.Drawing.Point(0, 150);
            this.leftList.Name = "leftList";
            this.leftList.Size = new System.Drawing.Size(148, 398);
            this.leftList.TabIndex = 1;
            // 
            // leftLight
            // 
            this.leftLight.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.leftLight.Dock = System.Windows.Forms.DockStyle.Top;
            this.leftLight.Location = new System.Drawing.Point(0, 0);
            this.leftLight.Name = "leftLight";
            this.leftLight.Size = new System.Drawing.Size(148, 150);
            this.leftLight.TabIndex = 0;
            this.leftLight.TabStop = false;
            // 
            // panel2
            // 
            this.panel2.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.panel2.Controls.Add(this.rightList);
            this.panel2.Controls.Add(this.rightLight);
            this.panel2.Dock = System.Windows.Forms.DockStyle.Left;
            this.panel2.Location = new System.Drawing.Point(150, 0);
            this.panel2.Name = "panel2";
            this.panel2.Size = new System.Drawing.Size(150, 550);
            this.panel2.TabIndex = 1;
            // 
            // rightList
            // 
            this.rightList.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(40)))), ((int)(((byte)(40)))), ((int)(((byte)(40)))));
            this.rightList.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.rightList.Dock = System.Windows.Forms.DockStyle.Fill;
            this.rightList.ForeColor = System.Drawing.Color.White;
            this.rightList.FormattingEnabled = true;
            this.rightList.Location = new System.Drawing.Point(0, 150);
            this.rightList.Name = "rightList";
            this.rightList.Size = new System.Drawing.Size(148, 398);
            this.rightList.TabIndex = 2;
            // 
            // rightLight
            // 
            this.rightLight.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.rightLight.Dock = System.Windows.Forms.DockStyle.Top;
            this.rightLight.Location = new System.Drawing.Point(0, 0);
            this.rightLight.Name = "rightLight";
            this.rightLight.Size = new System.Drawing.Size(148, 150);
            this.rightLight.TabIndex = 1;
            this.rightLight.TabStop = false;
            // 
            // panel3
            // 
            this.panel3.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.panel3.Controls.Add(this.topList);
            this.panel3.Controls.Add(this.topLight);
            this.panel3.Dock = System.Windows.Forms.DockStyle.Left;
            this.panel3.Location = new System.Drawing.Point(300, 0);
            this.panel3.Name = "panel3";
            this.panel3.Size = new System.Drawing.Size(150, 550);
            this.panel3.TabIndex = 2;
            // 
            // topList
            // 
            this.topList.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(40)))), ((int)(((byte)(40)))), ((int)(((byte)(40)))));
            this.topList.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.topList.Dock = System.Windows.Forms.DockStyle.Fill;
            this.topList.ForeColor = System.Drawing.Color.White;
            this.topList.FormattingEnabled = true;
            this.topList.Location = new System.Drawing.Point(0, 150);
            this.topList.Name = "topList";
            this.topList.Size = new System.Drawing.Size(148, 398);
            this.topList.TabIndex = 2;
            // 
            // topLight
            // 
            this.topLight.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.topLight.Dock = System.Windows.Forms.DockStyle.Top;
            this.topLight.Location = new System.Drawing.Point(0, 0);
            this.topLight.Name = "topLight";
            this.topLight.Size = new System.Drawing.Size(148, 150);
            this.topLight.TabIndex = 1;
            this.topLight.TabStop = false;
            // 
            // panel4
            // 
            this.panel4.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.panel4.Controls.Add(this.bottomList);
            this.panel4.Controls.Add(this.bottomLight);
            this.panel4.Dock = System.Windows.Forms.DockStyle.Left;
            this.panel4.Location = new System.Drawing.Point(450, 0);
            this.panel4.Name = "panel4";
            this.panel4.Size = new System.Drawing.Size(150, 550);
            this.panel4.TabIndex = 3;
            // 
            // bottomList
            // 
            this.bottomList.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(40)))), ((int)(((byte)(40)))), ((int)(((byte)(40)))));
            this.bottomList.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.bottomList.Dock = System.Windows.Forms.DockStyle.Fill;
            this.bottomList.ForeColor = System.Drawing.Color.White;
            this.bottomList.FormattingEnabled = true;
            this.bottomList.Location = new System.Drawing.Point(0, 150);
            this.bottomList.Name = "bottomList";
            this.bottomList.Size = new System.Drawing.Size(148, 398);
            this.bottomList.TabIndex = 2;
            // 
            // bottomLight
            // 
            this.bottomLight.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.bottomLight.Dock = System.Windows.Forms.DockStyle.Top;
            this.bottomLight.Location = new System.Drawing.Point(0, 0);
            this.bottomLight.Name = "bottomLight";
            this.bottomLight.Size = new System.Drawing.Size(148, 150);
            this.bottomLight.TabIndex = 1;
            this.bottomLight.TabStop = false;
            // 
            // generatedPreview
            // 
            this.generatedPreview.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.generatedPreview.Dock = System.Windows.Forms.DockStyle.Top;
            this.generatedPreview.Location = new System.Drawing.Point(600, 0);
            this.generatedPreview.Name = "generatedPreview";
            this.generatedPreview.Size = new System.Drawing.Size(300, 319);
            this.generatedPreview.TabIndex = 4;
            this.generatedPreview.TabStop = false;
            // 
            // Import
            // 
            this.Import.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(50)))), ((int)(((byte)(50)))), ((int)(((byte)(50)))));
            this.Import.Dock = System.Windows.Forms.DockStyle.Left;
            this.Import.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Import.Location = new System.Drawing.Point(0, 0);
            this.Import.Name = "Import";
            this.Import.Size = new System.Drawing.Size(100, 25);
            this.Import.TabIndex = 5;
            this.Import.Text = "Import";
            this.Import.UseVisualStyleBackColor = false;
            this.Import.Click += new System.EventHandler(this.Import_Click);
            // 
            // Generate
            // 
            this.Generate.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(50)))), ((int)(((byte)(50)))), ((int)(((byte)(50)))));
            this.Generate.Dock = System.Windows.Forms.DockStyle.Fill;
            this.Generate.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Generate.Location = new System.Drawing.Point(0, 0);
            this.Generate.Name = "Generate";
            this.Generate.Size = new System.Drawing.Size(300, 25);
            this.Generate.TabIndex = 6;
            this.Generate.Text = "Generate";
            this.Generate.UseVisualStyleBackColor = false;
            this.Generate.Click += new System.EventHandler(this.Generate_Click);
            // 
            // generatedList
            // 
            this.generatedList.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(40)))), ((int)(((byte)(40)))), ((int)(((byte)(40)))));
            this.generatedList.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.generatedList.Dock = System.Windows.Forms.DockStyle.Fill;
            this.generatedList.ForeColor = System.Drawing.Color.White;
            this.generatedList.FormattingEnabled = true;
            this.generatedList.Location = new System.Drawing.Point(600, 369);
            this.generatedList.Name = "generatedList";
            this.generatedList.Size = new System.Drawing.Size(300, 181);
            this.generatedList.TabIndex = 7;
            // 
            // Export
            // 
            this.Export.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(50)))), ((int)(((byte)(50)))), ((int)(((byte)(50)))));
            this.Export.Dock = System.Windows.Forms.DockStyle.Right;
            this.Export.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Export.Location = new System.Drawing.Point(200, 0);
            this.Export.Name = "Export";
            this.Export.Size = new System.Drawing.Size(100, 25);
            this.Export.TabIndex = 8;
            this.Export.Text = "Export";
            this.Export.UseVisualStyleBackColor = false;
            this.Export.Click += new System.EventHandler(this.Export_Click);
            // 
            // panel5
            // 
            this.panel5.Controls.Add(this.Export);
            this.panel5.Controls.Add(this.Import);
            this.panel5.Controls.Add(this.Generate);
            this.panel5.Dock = System.Windows.Forms.DockStyle.Top;
            this.panel5.Location = new System.Drawing.Point(600, 344);
            this.panel5.Name = "panel5";
            this.panel5.Size = new System.Drawing.Size(300, 25);
            this.panel5.TabIndex = 9;
            // 
            // progress
            // 
            this.progress.Dock = System.Windows.Forms.DockStyle.Bottom;
            this.progress.Location = new System.Drawing.Point(0, 550);
            this.progress.Name = "progress";
            this.progress.Size = new System.Drawing.Size(900, 5);
            this.progress.TabIndex = 10;
            this.progress.Visible = false;
            // 
            // panel6
            // 
            this.panel6.Controls.Add(this.Toon);
            this.panel6.Dock = System.Windows.Forms.DockStyle.Top;
            this.panel6.Location = new System.Drawing.Point(600, 319);
            this.panel6.Name = "panel6";
            this.panel6.Size = new System.Drawing.Size(300, 25);
            this.panel6.TabIndex = 11;
            // 
            // Toon
            // 
            this.Toon.AutoSize = true;
            this.Toon.Dock = System.Windows.Forms.DockStyle.Left;
            this.Toon.Location = new System.Drawing.Point(0, 0);
            this.Toon.Name = "Toon";
            this.Toon.Size = new System.Drawing.Size(51, 25);
            this.Toon.TabIndex = 0;
            this.Toon.Text = "Toon";
            this.Toon.UseVisualStyleBackColor = true;
            this.Toon.CheckedChanged += new System.EventHandler(this.Toon_CheckedChanged);
            // 
            // MainForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(30)))), ((int)(((byte)(30)))), ((int)(((byte)(30)))));
            this.ClientSize = new System.Drawing.Size(900, 555);
            this.Controls.Add(this.generatedList);
            this.Controls.Add(this.panel5);
            this.Controls.Add(this.panel6);
            this.Controls.Add(this.generatedPreview);
            this.Controls.Add(this.panel4);
            this.Controls.Add(this.panel3);
            this.Controls.Add(this.panel2);
            this.Controls.Add(this.panel1);
            this.Controls.Add(this.progress);
            this.ForeColor = System.Drawing.Color.White;
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedToolWindow;
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Name = "MainForm";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "2D NormalMap Generator";
            this.panel1.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.leftLight)).EndInit();
            this.panel2.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.rightLight)).EndInit();
            this.panel3.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.topLight)).EndInit();
            this.panel4.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.bottomLight)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.generatedPreview)).EndInit();
            this.panel5.ResumeLayout(false);
            this.panel6.ResumeLayout(false);
            this.panel6.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.ListBox leftList;
        private System.Windows.Forms.PictureBox leftLight;
        private System.Windows.Forms.Panel panel2;
        private System.Windows.Forms.ListBox rightList;
        private System.Windows.Forms.PictureBox rightLight;
        private System.Windows.Forms.Panel panel3;
        private System.Windows.Forms.ListBox topList;
        private System.Windows.Forms.PictureBox topLight;
        private System.Windows.Forms.Panel panel4;
        private System.Windows.Forms.ListBox bottomList;
        private System.Windows.Forms.PictureBox bottomLight;
        private System.Windows.Forms.PictureBox generatedPreview;
        private System.Windows.Forms.Button Import;
        private System.Windows.Forms.Button Generate;
        private System.Windows.Forms.ListBox generatedList;
        private System.Windows.Forms.Button Export;
        private System.Windows.Forms.Panel panel5;
        private System.Windows.Forms.ProgressBar progress;
        private System.Windows.Forms.Panel panel6;
        private System.Windows.Forms.CheckBox Toon;
    }
}

