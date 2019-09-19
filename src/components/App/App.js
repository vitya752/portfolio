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
            }),
            searchValue: ''
        };
    }

    render() {
        const {imageUrl} = this.props;
        const {todoList, searchValue} = this.state;
        const style = {backgroundImage: `url(${imageUrl})` };
        const visibleItems = this.onSearch(todoList, searchValue);
        return (
            <div className="main-container main-container--dark-bg" style = {style}>
                <div className="container container--custom">
                    <Header text="Welcome to my TodoList App" />
                    <Navigation
                        onSearchChange={this.onSearchChange} />
                    <List 
                        data={visibleItems}
                        onToggleImportant={(id) => this.onToggle(id, 'important')}
                        onToggleDone={(id) => this.onToggle(id, 'done')}
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

    onSearchChange = (e) => {
        this.setState({
            searchValue: e.target.value
        });
    }

    onSearch = (items, searchValue) => {
        if( searchValue.length === 0 ) return items;
        return items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()) !== false );
    }

    onToggle = (id, nameProperty) => {
        this.setState(({todoList}) => {
            const idx = todoList.findIndex((el) => el.id === id);
            const newTodoList = todoList.map((item, i) => {
                if( i === idx ) {
                    item[nameProperty] = !item[nameProperty];
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