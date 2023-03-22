import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';
import { Link } from 'react-router-dom'
import './Tweet.css';

interface TweetProps {
  content: string
}

export function Tweet (props: TweetProps) {
  return (
    <Link to="/status" className='tweet'>
      <img src="https://github.com/BrunoRaposoo.png" alt="Bruno Raposo" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Bruno Raposo</strong>
          <span>@Bruunoraposo</span>
        </div>

        <p>{props.content}</p>

        <div className="tweet-content-footer">
          <button>
            <ChatCircle />
            20
          </button>

          <button>
            <ArrowsClockwise />
            20
          </button>

          <button>
            <Heart />
            20
          </button>
        </div>
      </div>
    </Link>
  )
}