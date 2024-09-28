import React from 'react'

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div className="">
          <h1 className='text-3xl font-semibold text-center my-7'>About Dapson's Blog</h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Dapson's Blog is a blog that I created to share my thoughts and ideas with the world. I am a software engineer and I love to write aboutt my experiences and things that I have learned. I hope you enjoy reading my blog.
            </p>
            <p>
              On this blog, you'll find weekly articles and tutorials on topics such as web development, software engineering and programming languages. Dapson is always learning and exploring new technologies, so be sure to check back often for new content!
            </p>
            <p>
              We encourage you to leave comments on our posts and engage with other readers. You can likes other people's comments and reply to them as well. we believe that a community of learners can help each other grow and improve
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
