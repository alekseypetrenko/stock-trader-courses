<template>
<div>
      {{getPrices}}
      <canvas id="canvas" ref="canvasDiv" width="800" height="600"></canvas>

</div>
</template>

<script>

let canvasDiv = document.getElementById('canvas');

export default {
    props: ["savedProducts"],
      data() {
          return {
            values: [],
            xPadding: 35,
            yPadding: 35,
        }
    },
    computed: {
        getPrices() {
            let arr = []
            this.savedProducts.forEach((X, Y) => {
                arr.push({X: Y, Y: X})
            });
            this.values = arr
            return this.values
        }
    },
    methods: {
        getMaxY() {
            let max = 0;
            
            for (let i = 0; i < this.values.length; i ++) {
                if(this.values[i].Y > max) {
                    max = this.values[i].Y;
                }
            }
            max += 10 - max % 10 
            return max;
        },
        getXPixel(val) {
            return ((this.vueCanvas.canvas.width - this.xPadding) / this.getPrices.length) * val + (this.xPadding * 1.5);
        },
        getYPixel(val) {
            return this.vueCanvas.canvas.height - (((this.vueCanvas.canvas.height - this.yPadding) / this.getMaxY()) * val) - this.yPadding;
        }
    },
    

    
    mounted() {
        let cc = document.getElementById("canvas");
        let ctx = cc.getContext("2d");    
        this.vueCanvas = ctx;


        let c = this.vueCanvas;           
 
        c.lineWidth = 2;
        c.strokeStyle = '#333';
        c.font = 'italic 8pt sans-serif';
        c.textAlign = "center";
        
        // Draw the axises
        c.beginPath();
        c.moveTo(this.xPadding, 0);
        c.lineTo(this.xPadding, this.vueCanvas.canvas.height - this.yPadding);
        c.lineTo(this.vueCanvas.canvas.width, this.vueCanvas.canvas.height - this.yPadding);
        c.stroke();
        
        // Draw the X value texts
        for(var i = 0; i < this.values.length; i ++) {
            c.fillText(this.values[i].X, this.getXPixel(i), this.vueCanvas.canvas.height - this.yPadding + 20);
        }
        
        // Draw the Y value texts
        c.textAlign = "right"
        c.textBaseline = "middle";
        for(var i = 0; i < this.getMaxY(); i += 10) {
            c.fillText(i, this.xPadding - 10, this.getYPixel(i));
        }

 
        
        c.strokeStyle = '#f00';
        
        // Draw the line graph
        c.beginPath();
        c.moveTo(this.getXPixel(0), this.getYPixel(this.values[0].Y));
        for(var i = 1; i < this.values.length; i ++) {
            c.lineTo(this.getXPixel(i), this.getYPixel(this.values[i].Y));
        }
        c.stroke();
        
        // Draw the dots
        c.fillStyle = '#333';
        
        for(var i = 0; i < this.values.length; i ++) {
            c.beginPath();
            c.arc(this.getXPixel(i), this.getYPixel(this.values[i].Y), 4, 0, Math.PI * 2, true);
            c.fill();
        }


    }




}


</script>

<style>

</style>