import React, { Component } from 'react'
import { withMediaProps } from 'react-media-player'
import { Media, Player, controls, } from 'react-media-player'
const { PlayPause, MuteUnmute,Volume,SeekBar, } = controls
// const { formatTime } = utils

class PodPlayer extends Component {

    shouldComponentUpdate({ media }) {
        return this.props.media.currentTime !== media.currentTime
      }
  render() {
    const { className, style, media } = this.props

   

    if (media.isLoading) {
        return (<h1>Loading.....</h1>)
      }
     return (
    <>

      <div class="row Podplayer">
      <div class="col s12 m4">
          
           <img src={this.props.art} width="100%" className="nbm-poster z-depth-3" alt={this.props.alt}></img>
      </div>
        <div class="col s12 m8">
            <div className="left-align">
                <h3>{this.props.podtitle}</h3>
                 <p>Duration :<b>{media.duration}</b> </p>
                 <time>
                   Current Time : {(media.currentTime)}
                  </time>
                  <SeekBar />
            </div>
       </div>
      </div>
      
      
       


       
      
     </>



     
    )
  }
}
 
export default withMediaProps(PodPlayer)