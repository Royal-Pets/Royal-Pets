import React from 'react';
import { Form } from 'react-bootstrap';
import './FilterProduct.css'

export class FilterProduct extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                <Form >


                    <Form.Group aria-label="Default select example">
                        <Form.Label className="form">Choose your pets </Form.Label>
                        <Form.Control className="formm"onChange={this.props.submitForm}  style={{ marginRight: "15px" }} name="pets" id="pets" as='select'>
                            <option value="All"> All </option>
                            <option value="Cats"> Cats </option>
                            <option value="Dogs"> Dogs </option>
                            <option value="Dogs and Cats">  Dogs and Cats </option>
                            <option value="Small Pets"> Small Pets </option>
                           
                        </Form.Control>
                    </Form.Group>


                </Form>
            </div>
        )
    }
}

export default FilterProduct ;
