import Headerbox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';
const Home = async () => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
       <Headerbox 
       type="greeting"
       title="welcome"
       user={loggedIn?.firstName || 'Guest'}
       subtext="Access and manage your account and transaction effeciently"
       />

       <TotalBalanceBox 
       accounts={[]}
       totalBanks={1}
       totalCurrentBalance={1047.69}
       />
        </header>
RECENT TRANSACTIONS
      </div>
      <RightSidebar
      user={loggedIn}
      transactions= {[]}
      banks={[{currentBalance: 69.69}, {currentBalance: 1972.69} ]}
      />
    </section>
  )
}

export default Home