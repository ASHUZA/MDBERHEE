import Button from "../button/button"
import InputField from "../input-field/input-field";

const Form = (props) => {
    return (
        <form>
            <InputField type="text" label="Prenom" id="prenom" />
            <InputField type="text" label="nom" id="nom"/>
            <InputField type="number" label="age" id="age"/>
            <Button label={props.miseAjour?"Mise a jour":"creer"}/>
        </form>
    );
}
export default Form;