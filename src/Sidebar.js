import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';
function Sidebar () {
    const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className='sidebar'>
    <img className='sidebar_logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify_logo"/>   
    <SidebarOption Icon={HomeIcon} title="Home" />
    <SidebarOption Icon={ManageSearchIcon} title="Search" />
    <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
    <br/>
    <strong className="sidebar__title">PLAYLISTS</strong>
    <hr/>
    {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}


    </div>
  );
}                                       

export default Sidebar