export default function ({ store, redirect }) {
  if (!store.state.check.registrationCode) {
    return redirect('/check_registration')
  }
}
