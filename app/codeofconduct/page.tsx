import React from 'react';

export default function Page() {
  return (
    <>
      <div>
        <div className="text-blue-500 lg:text-6xl text-4xl font-manrope text-center p-5 mt-4 mb-2 lg:p-10">Code Of Conduct For IEEE SRM SB</div>
        <div className='text-blue-200 text-center text-sm lg:text-2xl'>Approved by the IEEE-SRM Executive Committee</div>
        <div className='lg:text-lg text-white mx-[2rem] py-5 pl-2 lg:px-[13rem]'>

          <p className="text-gray-300 text-justify">All participants of IEEE SRM SB are to abide by our Code of Conduct, both online and during in-person events that are hosted and/or associated with IEEE SRM SB.</p>
          
          <div className="text-blue-500 underline-offset-1 underline  mt-4 mb-2 font-semibold">The Pledge</div>
          <p className='text-gray-300 text-justify'>In the interest of fostering an open and welcoming environment, we pledge to make participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.
          </p>

          <div className='mt-8'>
            <div className='text-blue-500 underline-offset-1 underline  mt-4 mb-2 font-semibold'>The Standards</div>
            <div className='text-gray-300 text-justify'>
              <p>Examples of behaviour that contributes to creating a positive environment include :</p>
              <ul className='list-disc list-inside text-gray-300'>
                <li>
                  Using welcoming and inclusive language.
                </li>
                <li>
                  Being respectful of differing viewpoints and experiences.
                </li>
                <li>
                  Gracefully accepting constructive criticism.
                </li>
                <li className='mb-2'>
                  Referring to people by their preferred pronouns and using gender-neutral pronouns when uncertain.
                </li>
              </ul>
            </div>

            <div className='ml-6'><b>Examples of unacceptable behaviour by participants include:</b></div>
            <ul className='list-disc list-inside text-gray-300'>
              <li className='mt-2'>Trolling, insulting/derogatory comments, public or private harassment.</li>
              <li>Publishing others' private information, such as a physical or electronic address, without explicit permission.</li>
              <li>Not being respectful to reasonable communication boundaries, such as 'leave me alone,' 'go away,' or 'I’m not discussing this with you.'</li>
              <li>
                The usage of sexualised language or imagery and unwelcome sexual attention or advances.
              </li>
              <li>
                Swearing, usage of strong or disturbing language
              </li>
              <li>
                Demonstrating the graphics or any other content you know may be considered disturbing.
              </li>
              <li>
                Starting and/or participating in arguments related to politics.
              </li>
              <li>
                Assuming or promoting any kind of inequality including but not limited to: age, body size, disability, ethnicity, expression, nationality and race, personal appearance, religion, or sexual identity and orientation.
              </li>
              <li>
                Drug promotion of any kind.
              </li>
              <li>
                Attacking personal tastes.
              </li>
              <li>
                Other conduct which any prudent person would reasonably consider inappropriate in a professional setting.
              </li>
            </ul>
          </div>

          <div className='mt-8'>
            <div className='font-semibold text-blue-500 underline-offset-1 underline'>Enforcement</div>
            <div className='text-gray-300 mt-2 text-justify'>
              <ul className='list-disc list-inside text-gray-300'>
                <li>
                  No member shall use organisation assets for any personal gain or publish any official document(s) / resource(s) without due authorization.
                </li>
                <li>
                  Violations of the Codeof Conduct may be reported by sending an email to ieee@srmist.edu.in. All reports will be reviewed and investigated and will result in a response that is deemed necessary and appropriate to the circumstances. Further details of specific enforcement policies may be posted separately.
                </li>
                <li>
                  We hold the right and responsibility to remove comments or other contributions that are not aligned with this Code of Conduct or to temporarily or permanently ban any members for other behaviors that we deem inappropriate, threatening, offensive, or harmful.
                </li>
                <li>
                  Members who would like to leave IEEE SRM SB for any reason whatsoever are required to provide 3 days' notice to their head prior to leaving and must submit a resignation email to <a className="text-blue-200 hover:text-blue-500" href="mailto:ieee@srmist.edu.in">ieee@srmist.edu.in</a>.
                </li>
                <li>
                  The notice period will start once a member sends their resignation email to <a className="text-blue-200 hover:text-blue-500" href="mailto:ieee@srmist.edu.in">ieee@srmist.edu.in</a>.
                </li>
                <li>
                  Team members are strictly advised to avoid sharing sensitive information about IEEE. Disciplinary action shall be taken for any violations.
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}