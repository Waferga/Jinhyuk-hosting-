import { useState } from 'react'

export default function JinhyukHosting() {
  const [page, setPage] = useState('home')
  const [selectedPayment, setSelectedPayment] = useState('Dana')
  const [paymentStatus, setPaymentStatus] = useState('PENDING')

  const services = [
    { name: 'Minecraft Hosting', icon: '🎮' },
    { name: 'Pterodactyl Panel', icon: '🔥' },
    { name: 'Java & Bedrock', icon: '☕' },
    { name: 'Plugin Support', icon: '🧩' },
    { name: 'Modpack Installer', icon: '⚡' },
    { name: 'DDoS Protection', icon: '🛡️' },
    { name: 'Ryzen NVME Server', icon: '🖥️' },
    { name: 'Auto Backup', icon: '💾' },
    { name: 'Live Console', icon: '📟' },
  ]

  const payments = ['💳 Dana', '🟢 GoPay', '🔵 OVO', '💠 ShopeePay', '🛒 QRIS']

  const handlePayment = () => {
    setPaymentStatus('SUCCESS')
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center border-b border-cyan-500/20 pb-5 mb-10 flex-wrap gap-4">
          <div>
            <h1 className="text-4xl font-black text-cyan-300">🗡️ Jinhyuk Hosting</h1>
            <p className="text-gray-400">Shadow Monarch Hosting System</p>
          </div>

          <div className="flex gap-3 flex-wrap">
            <button onClick={() => setPage('home')} className="px-4 py-2 rounded-xl border border-cyan-500/20">Home</button>
            <button onClick={() => setPage('services')} className="px-4 py-2 rounded-xl border border-cyan-500/20">Services</button>
            <button onClick={() => setPage('register')} className="px-4 py-2 rounded-xl border border-cyan-500/20">Register</button>
            <button onClick={() => setPage('payment')} className="px-4 py-2 rounded-xl bg-cyan-400 text-black font-bold">Payment</button>
            <button onClick={() => setPage('dashboard')} className="px-4 py-2 rounded-xl border border-cyan-500/20">Dashboard</button>
          </div>
        </header>

        {page === 'home' && (
          <div>
            <div className="text-center mb-16">
              <h2 className="text-6xl font-black text-cyan-300 mb-6">Shadow Monarch Hosting</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Premium hosting platform inspired by dark fantasy manhwa themes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-14">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8 hover:-translate-y-2 transition shadow-lg hover:shadow-cyan-500/20">
                  <div className="text-6xl mb-5">{service.icon}</div>
                  <h3 className="text-3xl font-black text-cyan-300 mb-3">{service.name}</h3>
                  <button onClick={() => setPage('payment')} className="mt-5 w-full py-4 rounded-2xl bg-cyan-400 text-black font-black hover:scale-105 transition">
                    Buy Now
                  </button>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-4 gap-6">
              {[
                { rank: 'Shadow 1GB', price: 'Rp10K' },
                { rank: 'Hunter 2GB', price: 'Rp20K' },
                { rank: 'Monarch 4GB', price: 'Rp40K' },
                { rank: 'Dragon 8GB', price: 'Rp80K' },
              ].map((pack, i) => (
                <div key={i} className="bg-black/40 border border-cyan-500/20 rounded-3xl p-6 text-center">
                  <h3 className="text-2xl font-black text-cyan-300 mb-3">{pack.rank}</h3>
                  <p className="text-4xl font-black mb-5">{pack.price}</p>
                  <div className="space-y-2 text-gray-400 mb-6">
                    <p>✔ Unlimited Slot</p>
                    <p>✔ Anti DDoS</p>
                    <p>✔ NVME SSD</p>
                    <p>✔ 24/7 Online</p>
                  </div>

                  <button onClick={() => setPage('payment')} className="w-full py-3 rounded-2xl bg-cyan-400 text-black font-black hover:scale-105 transition">
                    Order Package
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === 'services' && (
          <div>
            <h2 className="text-5xl font-black text-cyan-300 mb-10 text-center">All Hosting Services</h2>

            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8">
                  <div className="text-6xl mb-5">{service.icon}</div>
                  <h3 className="text-3xl font-black text-cyan-300 mb-3">{service.name}</h3>
                  <button onClick={() => setPage('payment')} className="mt-5 w-full py-4 rounded-2xl bg-cyan-400 text-black font-black">
                    Order Service
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === 'register' && (
          <div className="max-w-lg mx-auto bg-white/5 border border-cyan-500/20 rounded-3xl p-8">
            <h2 className="text-4xl font-black text-cyan-300 mb-6">Create Account</h2>

            <div className="space-y-4">
              <input placeholder="Username" className="w-full p-4 rounded-2xl bg-black/40 border border-cyan-500/20" />
              <input placeholder="Email" className="w-full p-4 rounded-2xl bg-black/40 border border-cyan-500/20" />
              <input placeholder="Password" type="password" className="w-full p-4 rounded-2xl bg-black/40 border border-cyan-500/20" />

              <button onClick={() => setPage('dashboard')} className="w-full py-4 rounded-2xl bg-cyan-400 text-black font-black">
                Register Account
              </button>
            </div>
          </div>
        )}

        {page === 'payment' && (
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8">
              <h2 className="text-4xl font-black text-cyan-300 mb-6">Choose Payment</h2>

              <div className="space-y-4">
                {payments.map((pay, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPayment(pay)}
                    className={`w-full p-5 rounded-2xl text-left text-lg border transition ${selectedPayment === pay ? 'bg-cyan-400 text-black border-cyan-300' : 'bg-black/40 border-cyan-500/20'}`}
                  >
                    {pay}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8">
              <h2 className="text-4xl font-black text-cyan-300 mb-6">🧾 Invoice</h2>

              <div className="space-y-4 text-lg">
                <div className="flex justify-between">
                  <span>Service</span>
                  <span>Monarch Hosting</span>
                </div>

                <div className="flex justify-between">
                  <span>Payment</span>
                  <span>{selectedPayment}</span>
                </div>

                <div className="flex justify-between">
                  <span>Status</span>
                  <span className={paymentStatus === 'SUCCESS' ? 'text-green-400' : 'text-yellow-400'}>{paymentStatus}</span>
                </div>

                <div className="flex justify-between text-3xl font-black pt-6">
                  <span>Total</span>
                  <span className="text-cyan-300">Rp55K</span>
                </div>
              </div>

              <button onClick={handlePayment} className="w-full mt-10 py-5 rounded-2xl bg-cyan-400 text-black text-xl font-black hover:scale-105 transition">
                Complete Payment
              </button>

              {paymentStatus === 'SUCCESS' && (
                <div className="mt-6 p-5 rounded-2xl bg-green-500/10 border border-green-400 text-center">
                  <h3 className="text-3xl font-black text-green-400 mb-3">✅ Payment Success</h3>
                  <button onClick={() => setPage('dashboard')} className="px-6 py-3 rounded-2xl bg-green-400 text-black font-black">
                    Open Dashboard
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {page === 'dashboard' && (
          <div>
            <h2 className="text-5xl font-black text-cyan-300 mb-10">Shadow Dashboard</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8">
                <div className="text-5xl mb-4">🖥️</div>
                <h3 className="text-2xl font-black text-cyan-300">Server Status</h3>
                <p className="text-green-400 text-3xl font-black mt-4">ONLINE</p>
              </div>

              <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8">
                <div className="text-5xl mb-4">👤</div>
                <h3 className="text-2xl font-black text-cyan-300">User Rank</h3>
                <p className="text-cyan-300 text-3xl font-black mt-4">Shadow Monarch</p>
              </div>

              <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8">
                <div className="text-5xl mb-4">💳</div>
                <h3 className="text-2xl font-black text-cyan-300">Balance</h3>
                <p className="text-cyan-300 text-3xl font-black mt-4">Rp500K</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8">
                <h3 className="text-3xl font-black text-cyan-300 mb-6">Account Settings</h3>
                <div className="space-y-4">
                  <input value="ShadowPlayer" className="w-full p-4 rounded-2xl bg-black/40 border border-cyan-500/20" />
                  <input value="shadow@jinhyuk.com" className="w-full p-4 rounded-2xl bg-black/40 border border-cyan-500/20" />
                  <button className="px-6 py-3 rounded-2xl bg-cyan-400 text-black font-black">Save Settings</button>
                </div>
              </div>

              <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8">
                <h3 className="text-3xl font-black text-cyan-300 mb-6">Server Controls</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button className="py-4 rounded-2xl bg-green-500/20 border border-green-400">Start</button>
                  <button className="py-4 rounded-2xl bg-red-500/20 border border-red-400">Stop</button>
                  <button className="py-4 rounded-2xl bg-yellow-500/20 border border-yellow-400">Restart</button>
                  <button className="py-4 rounded-2xl bg-cyan-500/20 border border-cyan-400">Backup</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
