import * as React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar} from '@material-ui/core';

export default function FolderList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Erick Cisterna" secondary="Legajo: 3612" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Luciana Scorcione" secondary="Legajo: 3649" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Joaquin Manresa" secondary="Legajo: 3650" />
      </ListItem>
    </List>
  );
}