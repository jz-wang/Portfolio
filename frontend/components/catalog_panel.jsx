import React from 'react';
require('smoothscroll-polyfill').polyfill();

class Catalog extends React.Component {
  constructor(props){
    super(props);
    this.smoothScroll = this.smoothScroll.bind(this);
  }

  componentDidMount(){
    let catalog = $('.catalog');
    catalog.addClass('catalog-panel-slider catalog-shift-left');
    setTimeout(()=>{
      catalog.removeClass('catalog-panel-slider catalog-shift-left');
    }, 800);
    this.setScrollLine();
  }

  setScrollLine(){
    const projects = $('#projectsLi');
    const assets = $('#assetsLi');
    const contact = $('#contactLi');
    const viewportHeight = $('#contact')[0].scrollHeight;

    let eatsy = $('#eatsyLi');
    let sssf = $('#sssfLi');
    let endless = $('#endlessLi');

    $('.scroll-container').scroll(function(){
      const _inspirations = $('#inspirations')[0].scrollHeight;
      const _projects = $('#projects')[0].scrollHeight + _inspirations;
        let _eatsy = $('#eatsy')[0].scrollHeight + _inspirations;
        let _sssf = $('#sssf')[0].scrollHeight + _eatsy;
        let _endless = $('#endless')[0].scrollHeight + _sssf + Math.floor(viewportHeight / 4);
      const _assets = $('#assets')[0].scrollHeight + _projects;
      const _contact = $('#contact')[0].scrollHeight + _assets;
      const pos2 = $('.scroll-container').scrollTop();
      const pos = pos2 + Math.floor(viewportHeight / 2);
      window.console.log(pos, _sssf, _endless);
      if(pos < _inspirations){
        projects.removeClass('enlarge');
          eatsy.removeClass('enlarge-2');
      } else if(pos >= _inspirations && pos < _projects){
        if(!projects.hasClass('enlarge')){
          projects.addClass('enlarge');
          assets.removeClass('enlarge');
        }
        if(pos2 >= _inspirations && pos2 < _eatsy){
          if(!eatsy.hasClass('enlarge-2')){
            eatsy.addClass('enlarge-2');
            sssf.removeClass('enlarge-2');
          }
        } else if(pos2 >= _eatsy && pos2 < _sssf){
          if(!sssf.hasClass('enlarge-2')){
            sssf.addClass('enlarge-2');
            eatsy.removeClass('enlarge-2');
            endless.removeClass('enlarge-2');
          }
        } else if(pos2 >= _sssf && pos2 < _endless){
          if(!endless.hasClass('enlarge-2')){
            endless.addClass('enlarge-2');
            sssf.removeClass('enlarge-2');
          }
        }
      } else if(pos >= _projects && pos < _assets){
        if(!assets.hasClass('enlarge')){
          assets.addClass('enlarge');
          projects.removeClass('enlarge');
            endless.removeClass('enlarge-2');
          contact.removeClass('enlarge');
        }
      } else if(pos >= _assets && pos < _contact){
        if(!contact.hasClass('enlarge')){
          contact.addClass('enlarge');
          assets.removeClass('enlarge');
        }
      }
    });
  }

  smoothScroll(element){
    document.querySelector(`#${element}`).scrollIntoView({ behavior: 'smooth' });
  }

  render(){
    return(
      <div className='catalog'>
        <ul>
          <li type='none' id='projectsLi' onClick={()=>this.smoothScroll('projects')}>projects</li>
            <ul id='projects-ul'>
              <li type='none' id='eatsyLi' onClick={()=>this.smoothScroll('eatsy')}>Eatsy</li>
              <li type='none' id='sssfLi' onClick={()=>this.smoothScroll('sssf')}>StreetSweepSF</li>
              <li type='none' id='endlessLi' onClick={()=>this.smoothScroll('endless')}>EndlessSprinter</li>
            </ul>
          <li type='none' id='assetsLi' onClick={()=>this.smoothScroll('assets')}>assets</li>
          <li type='none' id='contactLi' onClick={()=>this.smoothScroll('contact')}>contact</li>
        </ul>
      </div>
    );
  }
}

export default Catalog;
