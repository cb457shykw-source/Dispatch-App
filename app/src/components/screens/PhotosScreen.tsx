import React from 'react';
import { useApp } from '../../state/AppState';
import { IconCamera } from '../icons';

export function PhotosScreen() {
  const { state, L, actions } = useApp();

  const photoList = Array.from({ length: state.photos }, (_, i) => ({
    caption: (state.lang === 'en' ? 'Subgrade ' : 'Subrasante ') + (i + 1),
    at: 'Aug 24 · 7:0' + (i + 1) + ' AM',
  }));

  return (
    <div className="cd-screenpad">
      <div className="photos-title">{L.t_photos}</div>
      <div className="photos-sub">{L.photoSub}</div>
      <button className="btn-add-photo" onClick={actions.addPhoto}>
        <IconCamera />
        {L.t_addPhoto}
      </button>
      <div className="photo-grid">
        {photoList.map((ph, i) => (
          <div key={i} className="photo-tile">
            <div className="caption">{ph.caption}</div>
            <div className="at">{ph.at}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
