import React, { Component } from 'react'
import axios from 'axios'

export default class Locales extends Component {
    state={
        local:[]
    }

     async  componentDidMount(){
     const res = await axios.get('http://localhost:3000/api/locales')
     this.setState({local: res.data})
           
       }

    render() {
        return (
            <div className="container">
                <div className="row">
                    
                    <div className="col-md-4">
                        ingreso de locales aca
                    </div>
                    <div className="col-md-8">
                        <ul className="list-group">
                        {
                           this.state.local.map(locales=>
                            <li className="list-group-item list-group-item-action" key={locales._id}>
                                   {locales.nombre}
                            </li>)
                        }
                        </ul>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}
