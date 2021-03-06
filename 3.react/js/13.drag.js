let Drag = React.createClass({
  getInitialState(){
    return this.props;
  },
  handleMouseDown(event){
    this.x = event.pageX - event.target.offsetLeft;
    this.y = event.pageY - event.target.offsetTop;
    document.onmousemove = (event)=>{
      this.setState({
        left:event.pageX - this.x,
        top:event.pageY - this.y
      })
    }
    document.onmouseup = ()=>{
      document.onmousemove = null;
    }
  },
  render(){
    return (
      <div style={this.state} onMouseDown={this.handleMouseDown}></div>
    )
  }
});
let props = {
  position:'absolute',
  width:100,
  height:100,
  backgroundColor:'green',
  top:0,
  left:0
}
ReactDOM.render(<Drag {...props} />, document.querySelector('#app')
);
