import React from 'react';

export default function Logo(props){
    const flwLogo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAYAAAA5Od+KAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkUyNjgxNkUxRkQ1QjExRThCMEFFRTdBOUUxMzNCMThBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkUyNjgxNkUyRkQ1QjExRThCMEFFRTdBOUUxMzNCMThBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTI2ODE2REZGRDVCMTFFOEIwQUVFN0E5RTEzM0IxOEEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTI2ODE2RTBGRDVCMTFFOEIwQUVFN0E5RTEzM0IxOEEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz57VCfCAAAOSElEQVR42uxd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"
    
    if(props.menuVisible)
        return (
            <div className="col-3 col-md-1">
                <img src={flwLogo} alt="flexwhere logo" className="img-fluid flw-blue border-rounded" />
            </div>
        );
    else 
        return null;

}