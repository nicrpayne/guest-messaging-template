import React from 'react';
import Companies from '../../Data/Companies';


class MessageItems extends Component {
    render() {
        
        return (
            <>
                <ul>
                {Companies.map((Company) =>{
                    return <Companies company={company}
                    key={company.id}/>
                })
                }
                </ul>
            </>
        )
    }
}

export default MessageItems