function LoginScreen() {
  return (
    <main className="login-screen">
      <h1>Welcome</h1>
      <form>
        <input type="text" placeholder="Username" aria-label="Username" />
        <input type="password" placeholder="Password" aria-label="Password" />
        <button type="submit">Log in</button>
      </form>
    </main>
  )
}

export default LoginScreen
