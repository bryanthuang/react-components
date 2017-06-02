class GroceryListItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      done : false
    };
  }
  onListItemHover(event) {
    this.setState({
      done : !this.state.done
    })
  }
  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };
    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.item}</li>
    )
  }
}


var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item}/>
    )}
  </ul>
)
//
// var GroceryList = () => (
//   <GroceryListItem items={['Kale', 'Cucumbers']}/>
// )

ReactDOM.render(<GroceryList items={['Kale', 'Cucumbers', 'chickcen ', 'currey']}/>, document.getElementById('app'))
