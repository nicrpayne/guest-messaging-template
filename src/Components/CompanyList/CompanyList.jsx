import React, {Component} from 'react';
import Companies from '../../Data/Companies';
import Guests from '../../Data/Guests';
// import Company from '../Company/Company'


class Lists extends Component {
    render() {

        return (
            <>
           
                <ul>
                    {this.props.Companies.map((company)=>{
                        return <Companies company={company} />
                        

                    })}
                </ul>
                <ul>
                    {/* {this.props.Guests.map((guest)=>{
                        return <Company company={guest}/>

                    })} */}
                </ul>
                <ul>
                    {/* {this.props.Companies.map((company)=>{
                        return <Company company={company}/>

                    })} */}
                </ul>
            </>
        )
    }
}

export default Lists