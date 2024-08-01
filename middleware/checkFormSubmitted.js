export default function ({ store, redirect }) {
    const formSubmitted = useFormSubmitted();
    if (!formSubmitted.value) {
        return redirect('/');
    }
}
