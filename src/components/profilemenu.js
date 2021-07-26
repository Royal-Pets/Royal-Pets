import React from 'react'
import Button from 'react-bootstrap/Button'
class Profilemenu extends React.Component {
    render() {
        return (

            <div style={{ margin: '25px', textAlign: 'center' }}>
                <Button style={{ display:'block', margin:'20px', width:'100%'  }} onClick={this.props.requestFunc} variant="primary">request</Button>

                <Button style={{ display:'block',margin:'20px', width:'100%'  }} onClick={this.props.somthingFunc} variant="success">somthing</Button>

                <Button style={{ display:'block', margin:'20px', width:'100%'  }} onClick={this.props.showanotherpage} variant="warning">anotherpage</Button>
            </div>

        )
    }
}

export default Profilemenu
