const swap = (array, i, j) => {
    [array[i], array[j]] = [array[j], array[i]];
};

const shuffle = (array, trocas) => {
    for (let i = 0; i < trocas; i++) {
        let j = Math.floor(Math.random() * array.length);
        let k = Math.floor(Math.random() * array.length);
        swap(array, j, k);
    }
};

const bubble_sort = (array) => {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
};

const selection_sort = (array) => {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        swap(array, i, minIndex);
    }
    return array;
};

const particionamento = (array, inicio, fim) => {
    let pivot = array[fim];
    let i = inicio - 1;

    for (let j = inicio; j < fim; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, fim);
    return i + 1;
};

const quick_sort = (array, inicio, fim) => {
    if (inicio < fim) {
        let p = particionamento(array, inicio, fim);
        quick_sort(array, inicio, p - 1);
        quick_sort(array, p + 1, fim);
    }
    return array;
};
