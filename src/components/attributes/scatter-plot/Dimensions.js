import React, {Component} from 'react';

// import { updateWidth } from '../../../actions/ScatterPlotActions'

class Dimensions extends Component {
  constructor(props){
    super(props);
    this.state = {
      checkbox: false
    };

    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.controlWidth = this.props.controlWidth;
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.updateWidth = this.updateWidth.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
    this.update_top = this.update_top.bind(this);
    this.update_bottom = this.update_bottom.bind(this);
    this.update_right = this.update_right.bind(this);
    this.update_left = this.update_left.bind(this);
    this.updateResponsive = this.updateResponsive.bind(this);
    // this.controlWidth = props.controlWidth.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
  }

  handleCheckbox(event) {
    this.setState({
      checkbox: !this.state.checkbox
    });
  }

  updateWidth(e){
    e.preventDefault();
    this.setState({
      width: parseInt(e.target.value) || ''
    })
  }
  updateHeight(e){
    this.setState({
      height: parseInt(e.target.value)
    })
  }
  update_top(e){
    console.log('--inside update_top');
    this.setState({
      top: parseInt(e.target.value)
    })
  }

  update_bottom(e){
    console.log('--inside bottom');
    this.setState({
      bottom: parseInt(e.target.value)
    })
  }
  update_right(e){
    console.log('--inside right');
    this.setState({
      right: parseInt(e.target.value)
    })
  }
  update_left(e){
    console.log('--inside left');
    this.setState({
      left: parseInt(e.target.value)
    })
  }
  updateResponsive(e){
    console.log('the responsive size value',e.target.checked)
    this.setState({
      responsiveSize: e.target.checked
    })
  }

  // Action Handlers
   handleFormSubmit(e){
    // console.log('--inside handleFormSubmit')
    // e.preventDefault();
    // if(e.which === 13){
    // this.controlWidth(this.state.width);
    // }

  console.log('--inside handleFormSubmit')
    e.preventDefault();
    if (e.which === 13) {
      console.log('---the new state, view component', this.state)
      this.controlWidth(this.state.width);
      // we can set
    }
    this.controlWidth(this.state.width);

  }

  render(){
    // const margin = Object.keys(this.props.margin).map((attr, i) => {
    //   let func = 'update_'+ attr;
    //   return <div className="form-group" key={i}>
    //             <label>{attr}</label>
    //             <input key={i} type="text" className="form-control margin-input" placeholder={attr}  onChange={this[func]}></input>
    //           </div>
    // });

    let dimensionsDisplay = <div className="attr-display"></div>

    const width = <div className="input-container">
                    <label>
                      Width:
                      <input type="number" className="form-control" onChange={this.updateWidth} />
                    </label>
                  </div>

    const height = <div className="input-container">
                      <label>
                        Height:
                        <input type="number" className="form-control" onChange={this.updateHeight} />
                      </label>
                    </div>

    const top = <div className="input-container">
                  <label>
                    Top:
                    <input type="number" className="form-control" onChange={this.update_top} />
                  </label>
                </div>

    const right = <div className="input-container">
                    <label>
                      Right:
                      <input type="number" className="form-control" onChange={this.update_right} />
                    </label>
                  </div>

    const bottom = <div className="input-container">
                    <label>
                      Bottom:
                      <input type="number" className="form-control" onChange={this.update_bottom} />
                    </label>
                  </div>

    const left = <div className="input-container">
                  <label>
                    Left:
                    <input type="number" className="form-control" onChange={this.update_left} />
                  </label>
                </div>
    const responsiveSize = <div className="checkbox">
                <label style={{color: '#8D8B8F'}}>
                  {/* this checkbox will still need it's own handler */}
                  <input type="checkbox" />
                  Responsive Resize
                </label>
            </div>

    if (this.state.checkbox) {
      dimensionsDisplay = <div className="attr-display">
        <div className="input-group">
            {width}
            {height}
        </div>
        <h6 className="panel-headers">Margin</h6>
        <div className="input-group">
            {top}
            {right}
        </div>
        <div className="input-group">
            {bottom}
            {left}
        </div>
        {responsiveSize}
      </div>
    }
    return(
      <div>
        <header className="toolbar toolbar-header attr-main-header">
          <span className="icon icon-menu attr-main-icon"></span>
          <h1 className="title main-header">Attributes Panel</h1>
        </header>
        <div className="attr-container">
          <header className="toolbar toolbar-header attr-header">
            <div className="checkbox">
              <form onSubmit={this.onSubmit}>
                <label>
                  <input type="checkbox" onChange={this.handleCheckbox} checked={this.state.checkbox}/>
                  SVG Dimensions
                </label>
              </form>
            </div>
          </header>
          <form onKeyUp={this.handleFormSubmit}>
            {dimensionsDisplay}
          </form>
        </div>
      </div>
    );
  }
}

export default Dimensions;
