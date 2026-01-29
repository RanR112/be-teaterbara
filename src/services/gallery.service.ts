import { drive } from "../config/google-drive.config";

export const getFolders = async (parentFolderId: string) => {
    const res = await drive.files.list({
        q: `'${parentFolderId}' in parents and mimeType='application/vnd.google-apps.folder' and trashed=false`,
        fields: "files(id, name)",
    });

    return res.data.files || [];
};

export const getImagesByFolder = async (folderId: string) => {
    const res = await drive.files.list({
        q: `'${folderId}' in parents and mimeType contains 'image/' and trashed=false`,
        fields: "files(id, name)",
    });

    return (res.data.files || []).map((file) => ({
        id: file.id,
        name: file.name,
        url: `https://lh3.googleusercontent.com/d/${file.id}=w1200`,
    }));
};
