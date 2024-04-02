import React from 'react'
import { atom , selector, atomFamily, noWait } from 'recoil';
import { users } from '../../test/user_members';
import { userGroups } from '../../test/user_groups';
import { loginCredentials } from '../../test/registered_users';

export const currentPage = atom({
    key: "currentPageAtom",
    default: "",
})

export const logInUser = atomFamily({
    key: "logInUserAtomFamily",
    default: (emailId, password) => {
        return loginCredentials.find(
            user => {
                return user.emailId === emailId && user.password === password;
            }
        )
    }
});

export const isUserSignedIn = atom({
    key: "isUserSignedInAtom",
    default: false,
})

export const homeItemList = atom({
    key: "homeItemListAtom",
    default: selector({
        key: "homeItemListAtomSelector",
        get: ({get}) => {
            const page = get(currentPage);
            const currUser = get(isUserSignedIn);
            let res;
            if(page === "homePage"){
                res = userGroups.findIndex((group) => {
                    return currUser.emailId === group.user;
                });
            } 
            return res;
        } 
    }),
})

export const currentGroup = atom({
    key: "currentGroupAtom",
    default: "",
})


export const userGroupList = atom({
    key: "userGroupListAtom",
    default: selector({
        key: "userGroupListAtomSelector",
        get: ({get}) => {
            const page = get(currentPage);
            const currUser = get(isUserSignedIn);
            const currGroup = get(currentGroup);
            let res;
            if(page === "usersGroupPage"){
                res = users.findIndex((user_group) => {
                    return currUser.emailId === user_group.user && currGroup === user_group.group;
                });
            } 
            return res;
        }
    })
})
