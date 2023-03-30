import { nanoid } from 'nanoid';
import { Input, Label, FormStyled } from 'components/Form/Form.styled';
import PropTypes from 'prop-types';


const Filter = (props) => {
    const filterId = nanoid();


    const { value, onChange } = props;
    return (
        <FormStyled>
            <Label htmlFor="">Find contacts by name</Label>
            <Input
                id={filterId}
                type="text"
                name="filter"
                value={value}
                onChange={onChange}
            />
        </FormStyled>
    );

};
export default Filter;


Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};