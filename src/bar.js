import './bar.css'
import react, {Component} from 'react'
class Bar extends Component{
    render(){
        return(
            <div className='Bar' style={{height:`${this.props.height}px`, background: `${this.props.backgroundColor}`}}>
            </div>
        )
    }
}

export default Bar