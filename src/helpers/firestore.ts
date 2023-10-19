import { QueryDocumentSnapshot, DocumentData } from "firebase/firestore";

export function docsToObject(
  docs: QueryDocumentSnapshot<DocumentData, DocumentData>[]
) {
  return docs.reduce((acc, doc) => {
    return {
      ...acc,
      [doc.id]: doc.data(),
    };
  }, {});
}

export function docsToArray(
  docs: QueryDocumentSnapshot<DocumentData, DocumentData>[]
) {
  return docs.map((doc) => doc.data());
}
