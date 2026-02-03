/**
 * Get Full Name
 * @name getFullName Concats first name and last name
 * @param {string} firstname in Stringformat
 * @param {string} lastname in Stringformat
 * @return {string}
 */
function getFullName(firstname, lastname) {
  return `${firstname} ${lastname}`.trim();
}

/**
 * Custom submit function
 * @param {scope} globals
 */
function submitFormArrayToString(globals) {
  const data = globals.functions.exportData();
  Object.keys(data).forEach((key) => {
    if (Array.isArray(data[key])) {
      data[key] = data[key].join(',');
    }
  });
  globals.functions.submitForm(data, true, 'application/json');
}

/**
 * Calculate the number of days between two dates.
 * @param {*} endDate
 * @param {*} startDate
 * @returns {number} returns the number of days between two dates
 */
function days(endDate, startDate) {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate;

  // return zero if dates are valid
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return 0;
  }

  const diffInMs = Math.abs(end.getTime() - start.getTime());
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
}

/**
* Masks the first 5 digits of the mobile number with *
* @param {*} mobileNumber
* @returns {string} returns the mobile number with first 5 digits masked
*/
function maskMobileNumber(mobileNumber) {
  if (!mobileNumber) {
    return '';
  }
  const value = mobileNumber.toString();
  // Mask first 5 digits and keep the rest
  return ` ${'*'.repeat(5)}${value.substring(5)}`;
}

// eslint-disable-next-line import/prefer-default-export
export {
  getFullName, days, submitFormArrayToString, maskMobileNumber,
};

function otpValidationFetchOffers() {
  debugger;

const API_URL =
  "https://applyonlinestage.hdfcbank.com/content/hdfc_savings_forms/api/otpvalidationfetchoffersdetails.json";

const payload = {
  requestString: {
    mobileNumber: "918209896168",
    dateOfBirth: "19980101",
    passwordValue: "",
    userAgent: navigator.userAgent,
    journeyID: "86e2ad47-19ad-405b-9dd5-a65bbaa7bd58_01_CSA_U_BAS",
    journeyName: "BAAS_CORPORATE_SALARY_JOURNEY",
    customerType: "z",
    employeeTeam: "",
    PSEUDO_ID: "",
    Id_token_jwt: "",
    fetchOtherOffers: "Y"
  }
};

fetch(API_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  credentials: "include",
  body: JSON.stringify(payload)   // ✅ PAYLOAD SENT HERE
})
  .then(res => res.json())
  .then(data => {
    console.log("✅ API Response:", data);
  })
  .catch(err => {
    console.error("❌ API Error:", err);
  });

}

