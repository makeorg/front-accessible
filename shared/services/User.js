/* @flow */
import { UserService } from 'Shared/api/UserService';
import { type UserInformationForm } from 'Shared/types/user';
import { getDateOfBirthFromAge } from 'Shared/helpers/date';

export const update = async (userInformation: UserInformationForm) => {
  return UserService.update({
    firstName: userInformation.firstName,
    dateOfBirth: getDateOfBirthFromAge(userInformation.age),
    postalCode: userInformation.postalCode,
    profession: userInformation.profession,
    description: userInformation.description,
  });
};
