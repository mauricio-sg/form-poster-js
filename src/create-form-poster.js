import FormBuilder from './form-builder';
import FormPoster from './form-poster';

export default function createFormPoster() {
    const formBuilder = new FormBuilder();
    const formPoster = new FormPoster(formBuilder);

    return formPoster;
}
