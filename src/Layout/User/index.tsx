import React from "react";
// import { useOidc, useOidcUser } from "@axa-fr/react-oidc";
// import useController from "Hooks/useController";
import { useNavigate } from "react-router-dom";
import { authStore } from "../../store/AuthStore";
import "./User.scss";

// import authStore from '../../store/AuthStore';

export default function User() {
  const nav = useNavigate();
  // const { logout } = useOidc();
  // const { oidcUser, oidcUserLoadingState } = useOidcUser();
  // const { confirm } = useController();

  // console.log(oidcUser);

  return (
    <div className="user-panel">
      <div className="user-info">
        <div className="user-info-name">
          {authStore.userInfo.name}
        </div>
        <div className="user-button">
          <button
            onClick={ () => authStore.logout() }
          >Выйти</button>
          <i className="fas fa-sign-out-alt"></i>
        </div>
      </div>
    </div>
  );
}
