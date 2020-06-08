export default function ({ store, redirect }) {
  if (!store.state.survey.registrationCode) {
    return redirect('/survey')
  }
}
