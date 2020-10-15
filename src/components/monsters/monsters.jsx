import React, { Component } from 'react'
import { SearchBox } from '../search-box/search-box'
import { CardList } from '../card-list/card-list'

import './monsters.styles.css'

class Monsters extends Component {
    constructor (props) {
        super(props)

        this.state = {
            monsters: [],
            searchField: '',
        }
    }

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({ monsters: users }))
            .catch(console.error)
    }

    render () {
        const { monsters, searchField } = this.state
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        )
        return (
            <div>
                <h1>Monsters Rolodex</h1>
                <SearchBox
                    placeHolder='Search Monsters'
                    handleChange={e => this.setState({ searchField: e.target.value })}
                />
                <CardList monsters={filteredMonsters} />
            </div>
        )
    }
}

export default Monsters
