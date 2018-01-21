
export class Chart {
    alignTicks: boolean = true;
    animation: boolean = true;
    backgroundColor: string = "#FFFFFF";
    borderColor: string = "#335cad";
    borderRadius: Number = 0;
    borderWidth: Number = 5;
    className: string;
    colorCount: Number = 10;
    defaultSeriesType: string = "line";
    description: string;
    height: string = "";
    ignoreHiddenSeries: boolean = true;
    inverted: boolean = false;
    margin: Array<string>;
    marginBottom: Number;
    marginLeft: Number;
    marginRight: Number;
    marginTop: Number;
    options3d: Options3d;
    panKey: String;
    panning: Boolean = false;
    parallelCoordinates: Boolean = false;
    pinchType: String;
    plotBackgroundColor: string;
    plotBackgroundImage: string;
    plotBorderColor: string = "#cccccc";
    plotBorderWidth: Number = 0;
    plotShadow: Boolean = false;
    polar: Boolean = false;
    reflow: Boolean = true;
    renderTo: String;
    shadow: Boolean = false;
    spacingBottom: Number = 15;
    spacingLeft: Number = 10;
    spacingRight: Number = 10;
    spacingTop: Number = 15;
    type: String;

 }

 class Options3d {
    enabled: boolean = true;
    alpha: Number = 45;
    beta: Number = 0;
}

 