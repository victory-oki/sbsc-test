import { Injectable, Inject } from "@angular/core";
import { LocalStorageService, SESSION_STORAGE } from "ngx-webstorage";
import { isNullOrUndefined } from "util";
import { StorageService } from "ngx-webstorage/lib/core/interfaces/storageService";

@Injectable({
  providedIn: "root",
})
export class CurrentUserService {
  constructor(
    private localStorage: LocalStorageService,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) {}

  addUser(profile) {
    this.localStorage.clear("user");
    console.log("adding user >>>  ");
    const prof = {
      name: profile.name,
      id: profile.id,
      notificationCount: profile.notification_count,
      verified: profile.verification_status,
    };
    this.localStorage.store("user", JSON.stringify(prof));
  }

  getCurrentUser() {
    return JSON.parse(this.localStorage.retrieve("user")) || false;
  }

  clearStorage() {
    this.localStorage.clear("user");
  }

  isLoggedIn() {
    const currentUser = this.getCurrentUser();
    if (!isNullOrUndefined(currentUser) && currentUser.verified) {
      return true;
    } else {
      return false;
    }
  }
}
