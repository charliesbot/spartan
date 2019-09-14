import os


def main():
    location = "../leetcode"
    for filename in os.listdir(location):
        data = filename.split(".")
        if len(data) == 3:
            src = f"{location}/{filename}"
            number, name, extension = data
            #  name, extension = fullname.split(".")
            name = name.replace(" ", "_").lower()
            newname = f"{number:0>4}{name}.{extension}"
            dst = f"{location}/{newname}"
            print(newname)
            os.rename(src, dst)


if __name__ == "__main__":
    main()

