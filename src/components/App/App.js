import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation'
import data from '../../data/data';
import List from '../List/List';
import AddItem from '../AddItem/AddItem';

export default class App extends Component {

    maxId = 100;

    constructor() {
        super();
        this.state = {
            todoList: data.map((item) => {
                return this.onItemCreate(item);
            })
        };
    }

    render() {
        const {imageUrl} = this.props;
        const style = {backgroundImage: `url(${imageUrl})` };
        const visibleItems = this.state.todoList;
        return (
            <div className="main-container main-container--dark-bg" style = {style}>
                <div className="container container--custom">
                    <Header text="Welcome to my TodoList App" />
                    <Navigation />
                    <List 
                        data={visibleItems}
                        onToggleImportant={this.onToggleImportant}
                        onItemDelete={this.onItemDelete} />
                    <AddItem 
                        onItemAdd={(this.onItemAddFromForm)} />
                </div>
            </div>
        );
    }

    onItemCreate = (text) => {
        return{
            id: this.maxId++,
            text: text,
            important: false,
            done: false
        };
    }

    onToggleImportant = (id) => {
        this.setState(({todoList}) => {
            const idx = todoList.findIndex((el) => el.id === id);
            const newTodoList = todoList.map((item, i) => {
                if( i === idx ) {
                    item.important = !item.important;
                }
                return item;
            })
            return {
                todoList: newTodoList
            }
        });
    }

    onItemDelete = (id) => {
        this.setState(({todoList}) => {
            const idx = todoList.findIndex((el) => el.id === id);
            const newTodoList = [...todoList.slice(0, idx), ...todoList.slice(idx+1)];
            return{
                todoList: newTodoList
            }
        });
    }

    onItemAddFromForm = (text) => {
        this.setState(({todoList}) => {
            const newItem = this.onItemCreate(text);
            const newTodoList = [...this.state.todoList, newItem];
            return{
                todoList: newTodoList
            }
        });
    }

}