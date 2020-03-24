import React, {Component} from 'react';
import Companies from '../../Data/Companies';
// import Company from '../Company/Company'


class CompanyList extends Component {
    render() {

        return (
            <>
                <ul>
                    {this.props.Companies.map((company)=>{
                        return <Company company={company}/>

                    })}
                </ul>
            </>
        )
    }
}

export default CompanyList