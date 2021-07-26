import React from 'react';
import { Form } from 'react-bootstrap';


export class FilterProduct extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                <Form >


                    <Form.Group aria-label="Default select example">
                        <Form.Label>Are you looking for cats needs or dog?!</Form.Label>
                        <Form.Control onChange={this.props.submitForm}  style={{ marginRight: "15px" }} name="pets" id="pets" as='select'>
                            <option value="All"> All </option>
                            <option value="Dogs"> Dogs </option>
                            <option value="Cats"> Cats </option>
                           
                        </Form.Control>
                    </Form.Group>


                </Form>
            </div>
        )
    }
}

export default FilterProduct ;
