import React, {Component} from 'react';
import Companies from '../../Data/Companies';
import Guests from '../../Data/Guests';
// import Company from '../Company/Company'
// let Companies = require('../../Data/Companies');


class CompanyList extends Component {
    render() {

        return (
            <>
             
                <ul>
                    {Companies.map((company)=>{
                        return <Companies company={company}/> 
                        // {JSON.stringify(Companies.company)}
                    })}
                </ul>
                {/* 
                <ul>
                    {Guests.map((guest)=>{
                        return <Guest guest={guest}/>

                    })}
                </ul> */}

                <ul>
                    {/* {Companies.map((company)=>{
                        return <Guest company={company}/>

                    })} */}
                </ul>
            </>
        )
    }
}

export default CompanyList