import React from 'react'

function Footer () {
  return (
    <div className=' pt-10'>
      <footer className='footer footer-center p-4 bg-orange-300 text-base-content '>
        <div className='layout container mx-auto flex felx-col xl:flex-row justify-between'>
          <div>
            <p>Copyright © 2022 - All right reserved by Abdallah</p>
          </div>
          <div>
            <p>
              <a href='https://www.github.com/abdallahifox' target='_blank'>
                Terms & Conditions
              </a>
              |               <a href='https://www.github.com/abdallahifox' target='_blank'>
               Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
