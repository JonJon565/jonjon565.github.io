import os
from PIL import Image

def rename_and_convert(folder_path, new_name):
    png_files = [file for file in os.listdir(folder_path) if file.endswith('.png')]
    for png_file in png_files:
        base_name, ext = os.path.splitext(png_file)
        new_filename = f"{new_name}_{base_name[-2:]}{ext}"
        new_filepath = os.path.join(folder_path, new_filename)
        os.rename(os.path.join(folder_path, png_file), new_filepath)
        img = Image.open(new_filepath)
        img.convert('RGB').save(os.path.splitext(new_filepath)[0] + '.jpg', 'JPEG')
        img.close()

if __name__ == "__main__":
    folder_path = input("Enter the folder path where the PNG files are located: ")
    if not os.path.isdir(folder_path):
        print("Invalid folder path.")
        exit()
    new_name = input("Enter the new name: ")
    rename_and_convert(folder_path, new_name)
    png_files = [file for file in os.listdir(folder_path) if file.endswith('.png')]
    for png_file in png_files:
        os.remove(os.path.join(folder_path, png_file))

    print("Conversion and renaming complete.")
