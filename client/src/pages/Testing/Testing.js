// var TodoList=React.createClass({

//     getInitialState: function(){
//         return {
//             limit: 5
//         }
//     },

//     onLoadMore() {
//         this.setState({
//             limit: this.state.limit + 5//done
//         });
//     },

//     renderTodos: function(){
//         return todos.slice(0,this.state.limit).map((todo)=>{
//             return(
//                 <Todo key={todo.todo_id}{...todo} onToggle={this.props.onToggle}/>
//             );
//         });
//     };

//     render:function(){
//         var {todos} = this.props;
//         return(
//             <div>
//                 {this.renderTodos()}
//                 <a href="#" onClick={this.onLoadMore}>Load</a>
//             </div>
//         )
//     }
// });