
const HomePage = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

        <div className="container relative mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-20">
          <div className="grid w-full items-center gap-16 lg:grid-cols-2">

            {/* Left Content */}
            <div>
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Secure Authentication Platform
              </div>

              {/* Heading */}
              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Modern Authentication
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Made Simple & Secure
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
                A modern authentication system built with powerful
                technologies. Sign up, sign in, reset passwords and
                manage your account with a secure and seamless experience.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/sign-up"
                  className="rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold transition hover:bg-blue-500"
                >
                  Get Started →
                </a>

                <a
                  href="/sign-in"
                  className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-center font-semibold text-slate-200 transition hover:bg-white/10"
                >
                  Sign In
                </a>
              </div>

              {/* Trust Text */}
              <p className="mt-6 text-sm text-slate-500">
                Built with modern web technologies
              </p>
            </div>

            {/* Right Side - Auth Card */}
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-blue-950/40 backdrop-blur-xl">

                <div className="rounded-2xl border border-white/10 bg-slate-900/90 p-6 sm:p-8">

                  {/* Window Header */}
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-400" />
                      <span className="h-3 w-3 rounded-full bg-yellow-400" />
                      <span className="h-3 w-3 rounded-full bg-green-400" />
                    </div>

                    <span className="text-xs text-slate-300">
                      secure-auth.app
                    </span>
                  </div>

                  {/* Fake Login UI */}
                  <div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold">
                        Welcome Back
                      </h3>

                      <p className="mt-1 text-sm text-slate-300">
                        Sign in to your account
                      </p>
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                      <label className="mb-2 block text-sm text-slate-400">
                        Email
                      </label>

                      <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-500">
                        ronit343999@gmail.com
                      </div>
                    </div>

                    {/* Password */}
                    <div className="mb-6">
                      <label className="mb-2 block text-sm text-slate-400">
                        Password
                      </label>

                      <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm tracking-widest text-slate-500">
                        ••••••••••••
                      </div>
                    </div>

                    {/* Login Button */}
                    <div className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-center font-semibold">
                      Sign In Securely
                    </div>

                    {/* Security */}
                    <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
                      <span>🔒</span>
                      Your account is protected
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="border-t border-white/5 bg-slate-900/50 py-20">
        <div className="container mx-auto max-w-6xl px-6">

          <div className="mb-12 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
              Technology Stack
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Built With Modern Technologies
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              This authentication project combines modern frontend,
              backend and database technologies to provide a reliable
              authentication experience.
            </p>
          </div>

          {/* Tech Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

            {/* Next.js */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl font-bold text-black">
                N
              </div>

              <h3 className="font-semibold">Next.js</h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Modern React framework for building fast web applications.
              </p>
            </div>

            {/* React */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-xl font-bold text-cyan-400">
                ⚛
              </div>

              <h3 className="font-semibold">React</h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Component-based UI library for creating interactive interfaces.
              </p>
            </div>

            {/* Better Auth */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-xl">
                🔐
              </div>

              <h3 className="font-semibold">Better Auth</h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Authentication infrastructure for secure user accounts.
              </p>
            </div>

            {/* Resend */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400/10 text-xl font-bold text-orange-400">
                ✉
              </div>

              <h3 className="font-semibold">Resend</h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Reliable transactional email delivery for authentication flows.
              </p>
            </div>

            {/* MongoDB */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-xl font-bold text-emerald-400">
                M
              </div>

              <h3 className="font-semibold">MongoDB Atlas</h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Cloud database for securely storing application data.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 py-20">
        <div className="container mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to get started?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Create your account and experience a modern,
            secure authentication system.
          </p>

          <a
            href="/sign-up"
            className="mt-8 inline-block rounded-xl bg-blue-600 px-7 py-3 font-semibold transition hover:bg-blue-500"
          >
            Create Account →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-6 text-center">
        <p className="text-sm text-slate-600">
          Built with Next.js • React • Better Auth • Resend • MongoDB Atlas
        </p>
      </footer>
    </main>
  );
};

export default HomePage;
