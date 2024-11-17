import Swal, { SweetAlertOptions } from 'sweetalert2';

export const displaySwal = (sweetAlertOptions: SweetAlertOptions) => {
  return Swal.fire(sweetAlertOptions);
};

export const displayConfirmationSwal = (
  sweetAlertOptions: SweetAlertOptions,
  callback: () => void
) => {
  return Swal.fire(sweetAlertOptions).then(result => {
    if (result.isConfirmed) {
      callback();
    }
  });
};
